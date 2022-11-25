//
//  RegisterViewController.swift
//  roomscan
//
//  Created by Flux on 18/11/2022.
//

import UIKit

class RegisterViewController: UIViewController {
    @IBOutlet weak var username: UITextField!
    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var password: UITextField!
    @IBOutlet weak var error: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.movePageUp()
        self.hideKeyboardWhenTappedAround() 
    }
    
    @IBAction func navigate(_ sender: Any) {
        let vc = storyboard?.instantiateViewController(identifier: "login") as! LoginViewController
        vc.modalPresentationStyle = .fullScreen
        present(vc, animated: true)
    }
    
  
    @IBAction func register(_ sender: Any) {
        validateForm()
        if error.text == nil {
            Task{
                 let res = await FirebaseManager.shared.signUp(withUsername: username.text!, withEmail: email.text!, withPassword: password.text!)
                 print(res)
                 if res.isEmpty {
                     let vc = storyboard?.instantiateViewController(identifier: "tabBar") as! TabBarViewController
                     vc.modalPresentationStyle = .fullScreen
                     present(vc, animated: true)
                 }else{
                     error.text = res
                 }
            }
        }
    }
    
    private func validateForm() {
        if username.text?.trimmingCharacters(in: .whitespacesAndNewlines) == "" ||
            email.text?.trimmingCharacters(in: .whitespacesAndNewlines) == "" ||
            password.text?.trimmingCharacters(in: .whitespacesAndNewlines) == "" {
            error.text = "Please fill in all fields"
            return
        }
        
        error.text = nil
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
