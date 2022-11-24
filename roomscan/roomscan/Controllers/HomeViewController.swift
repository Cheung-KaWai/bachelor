//
//  HomeViewController.swift
//  roomscan
//
//  Created by Flux on 18/11/2022.
//

import UIKit

class HomeViewController: UIViewController {

    @IBOutlet weak var username: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        let user = FirebaseManager.shared.getCurrentUser()
        username.text = "Welcome \(user)"
    }
    
    @IBAction func scan(_ sender: Any) {
        let vc = storyboard?.instantiateViewController(identifier: "scan") as! ScanController
        vc.modalPresentationStyle = .fullScreen
        present(vc, animated: true)
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
