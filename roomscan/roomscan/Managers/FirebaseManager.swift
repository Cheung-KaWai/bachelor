//
//  FirebaseManager.swift
//  roomscan
//
//  Created by Flux on 18/11/2022.
//

import Foundation
import FirebaseFirestore
import FirebaseAuth

final class FirebaseManager{
    static let shared = FirebaseManager()
    
    private var db : Firestore!
    
    
    private init(){
        setupFirestore()
    }
    
    private func setupFirestore(){
        let settings = FirestoreSettings()
        Firestore.firestore().settings = settings
        db = Firestore.firestore()
    }
    
    public func signUp(withUsername username:String, withEmail email:String, withPassword password: String) async ->String{
        
        do{
            try await Auth.auth().createUser(withEmail: email, password: password)
            
            let changeRequest = Auth.auth().currentUser?.createProfileChangeRequest()
            changeRequest?.displayName = username
            try await changeRequest?.commitChanges()

            return ""
        }catch{
            return error.localizedDescription
        }
    }
    
    public func signIn(withEmail email:String, withPassword password: String) async -> String {
        do{
            try await Auth.auth().signIn(withEmail: email, password: password)
            return ""
        }catch{
            return error.localizedDescription
        }
    }
    
    public func getCurrentUser() -> String{
        let user = Auth.auth().currentUser
        
        if user != nil{
            return (user?.displayName)!
        }
        return "no username"
    }
    
    public func addRoomdata(_ data: [String:Any], navigate: @escaping()->Void)  {
       var ref: DocumentReference? = nil
       ref = db.collection("roomplanData").addDocument(data: data) { err in
           if let err = err {
               print("Error adding document: \(err)")
           } else {
               print("Document added with ID: \(ref!.documentID)")
               DataManager.shared.setDocumentID(withID: ref!.documentID)
               navigate()
           }
       }
    }
    
    public func getRooms (){
        let user = Auth.auth().currentUser
        var roomsID = [String]()
        print(user?.uid as Any)
        if user != nil {
            let rooms = db.collection("roomplanData").whereField("uid", isEqualTo: user?.uid as Any)
            
            rooms.getDocuments() { (querySnapshot, err) in
                if let err = err {
                    print("Error getting documents: \(err)")
                } else {
                    for document in querySnapshot!.documents {
                        roomsID.append(document.documentID)
                    }
                    DataManager.shared.setRooms(withListRoom: roomsID)
                }
            }
        }
    }
    
    public func logOut () -> Bool{
        do{
            try FirebaseAuth.Auth.auth().signOut()
            return true
        }catch{
            print(error)
            return false
        }
    }
}
