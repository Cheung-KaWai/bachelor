//
//  MatrixData.swift
//  roomscan
//
//  Created by Flux on 25/11/2022.
//

import Foundation


struct MatrixData :Codable{
    var dimensions: [Float]
    var transform: [Float]
    
    var dictionary: [String: Any] {
        return ["dimensions": dimensions,
                "transform": transform,]
    }
    var nsDictionary: NSDictionary {
        return dictionary as NSDictionary
    }
    
    init(fromDimension size: [Float], fromTransform location: [Float]){
        dimensions = size
        transform = location
    }
}
