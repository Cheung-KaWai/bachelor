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
            print(email)
            print(password)
            let auth = try await Auth.auth().createUser(withEmail: email, password: password)
            let uid = auth.user.uid
            
            self.db.collection("users").addDocument(data: ["username":username,"uid":uid]){
                error in
                if error != nil {
                   print("guud")
                }else{
                   print("nicht guud")
                }
            }
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
}
