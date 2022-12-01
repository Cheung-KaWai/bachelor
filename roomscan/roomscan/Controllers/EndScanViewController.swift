//
//  EndScanViewController.swift
//  roomscan
//
//  Created by Flux on 01/12/2022.
//

import UIKit

class EndScanViewController: UIViewController {

    @IBOutlet weak var roomId: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        roomId.text=DataManager.shared.getDocumentID()
        print("hello", DataManager.shared.getDocumentID())
        // Do any additional setup after loading the view.
    }

    @IBAction func navigate(_ sender: Any) {
        let vc = storyboard?.instantiateViewController(identifier: "tabBar") as! TabBarViewController
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
