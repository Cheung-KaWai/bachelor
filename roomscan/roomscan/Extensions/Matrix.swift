//
//  Matrix.swift
//  roomscan
//
//  Created by Flux on 25/11/2022.
//

import Foundation
import simd
import SceneKit

extension matrix_float4x4 {
    func position() -> SCNVector3 {
        return SCNVector3(columns.3.x, columns.3.y, columns.3.z)
    }
}
