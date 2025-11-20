// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, ebool, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title WeightTrend
/// @author FHEVM Development Team
/// @notice Encrypted weight tracking contract
/// @notice A contract for tracking encrypted daily weight and determining if weight decreased
/// @dev Uses Zama FHEVM to encrypt weight data and perform encrypted comparisons
contract WeightTrend is SepoliaConfig {
    struct WeightRecord {
        euint32 weight;
        uint256 timestamp;
    }

    mapping(address => mapping(uint256 => WeightRecord)) private _records; // user => day => record
    mapping(address => uint256) private _lastUpdateDay; // user => last update day

    /// @notice Store encrypted weight for today
    /// @dev Weight validation should be done on the client side before encryption
    /// @param weight external encrypted weight handle
    /// @param inputProof input proof returned by the relayer SDK encrypt()
    function submitWeight(externalEuint32 weight, bytes calldata inputProof) external {
        // Note: externalEuint32 cannot be directly compared with integers
        // Weight validation should be performed on the client side before encryption
        euint32 encryptedWeight = FHE.fromExternal(weight, inputProof);
        
        uint256 today = block.timestamp / 86400; // Days since epoch
        
        // Optimize gas usage with efficient storage
        _records[msg.sender][today] = WeightRecord({
            weight: encryptedWeight,
            timestamp: block.timestamp
        });
        
        _lastUpdateDay[msg.sender] = today;

        // Allow access: contract and user
        FHE.allowThis(encryptedWeight);
        FHE.allow(encryptedWeight, msg.sender);
    }

    /// @notice Get encrypted weight for a specific day
    /// @param day the day (days since epoch)
    /// @return The encrypted weight for that day
    function getWeight(uint256 day) external view returns (euint32) {
        return _records[msg.sender][day].weight;
    }

    /// @notice Get today's encrypted weight
    /// @return The encrypted weight for today
    function getTodayWeight() external view returns (euint32) {
        uint256 today = block.timestamp / 86400;
        return _records[msg.sender][today].weight;
    }

    /// @notice Get yesterday's encrypted weight
    /// @return The encrypted weight for yesterday
    function getYesterdayWeight() external view returns (euint32) {
        uint256 yesterday = (block.timestamp / 86400) - 1;
        return _records[msg.sender][yesterday].weight;
    }

    /// @notice Compare today's weight with yesterday's weight
    /// @return An encrypted boolean indicating if today < yesterday (weight decreased)
    /// @dev Note: This will return encrypted false if either record doesn't exist (zero weight)
    function compareWeightTrend() external returns (ebool) {
        uint256 today = block.timestamp / 86400;
        uint256 yesterday = today - 1;
        
        euint32 todayWeight = _records[msg.sender][today].weight;
        euint32 yesterdayWeight = _records[msg.sender][yesterday].weight;
        
        // If today's weight is less than yesterday's, return true (decreased)
        // If either record doesn't exist (zero), the comparison will be false
        ebool result = FHE.lt(todayWeight, yesterdayWeight);
        
        // Allow access: contract and user
        FHE.allowThis(result);
        FHE.allow(result, msg.sender);
        
        return result;
    }

    /// @notice Get the last update day for the caller
    /// @return The last day when weight was updated
    function getLastUpdateDay() external view returns (uint256) {
        return _lastUpdateDay[msg.sender];
    }

    /// @notice Check if weight record exists for a specific day
    /// @param day the day to check
    /// @return true if record exists (timestamp > 0)
    function hasRecord(uint256 day) external view returns (bool) {
        return _records[msg.sender][day].timestamp > 0;
    }
}





