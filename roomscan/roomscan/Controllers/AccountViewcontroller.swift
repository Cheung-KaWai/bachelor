//
//  RoomsViewController.swift
//  roomscan
//
//  Created by Flux on 01/12/2022.
//

import UIKit
import FirebaseAuth

class AccountViewController: UIViewController {
    
    @IBOutlet weak var email: UILabel!
    @IBOutlet weak var userId: UILabel!
    @IBOutlet weak var username: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let user = FirebaseAuth.Auth.auth().currentUser
        username.text = user?.displayName
        userId.text = user?.uid
        email.text = user?.email
    }
}
