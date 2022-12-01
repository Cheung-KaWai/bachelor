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
    private var listRooms: [String] = [String]()
    
    init(){}
    
    public func setDocumentID(withID id : String){
        documentID = id
    }
    
    public func getDocumentID()->String{
        return documentID
    }
    
    public func getRooms()->[String]{
        return listRooms
    }
    
    public func setRooms(withListRoom rooms : [String]){
        listRooms = rooms
    }
}

