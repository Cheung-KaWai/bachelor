//
//  DataManager.swift
//  roomscan
//
//  Created by Flux on 25/11/2022.
//

import Foundation

final class DataManager{
    static let shared = DataManager()
    
    private var documentID: String = "no document ID"
    
    init(){}
    
    public func setDocumentID(withID id : String){
        documentID = id
    }
    
    public func getDocumentID()->String{
        return documentID
    }
    
}

