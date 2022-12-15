//
//  RoomsTableViewController.swift
//  roomscan
//
//  Created by Flux on 01/12/2022.
//

import UIKit

class RoomsTableViewController: UIViewController {

    @IBOutlet weak var tableview: UITableView!
    private var rooms = [String]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        rooms = DataManager.shared.getRooms()
        tableview.backgroundColor = .white
        tableview.delegate = self
        tableview.dataSource = self
    }

}

extension RoomsTableViewController : UITableViewDelegate{
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("you tapped me")
    }
}

extension RoomsTableViewController: UITableViewDataSource{
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return rooms.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableview.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        var content = cell.defaultContentConfiguration()
        content.text = rooms[indexPath.row]
        content.textProperties.color = .darkGray
        cell.contentConfiguration = content
        cell.backgroundColor = .white
        cell.selectionStyle = .none
        return cell
    }
}
