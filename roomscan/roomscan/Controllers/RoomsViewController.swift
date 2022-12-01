//
//  RoomsViewController.swift
//  roomscan
//
//  Created by Flux on 01/12/2022.
//

import UIKit

class RoomsViewController: UICollectionViewController {
    typealias DataSource = UICollectionViewDiffableDataSource<Int, String>
    typealias Snapshot = NSDiffableDataSourceSnapshot<Int, String>
    @IBOutlet var tableview: UITableView!
    
    var dataSource: DataSource!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        FirebaseManager.shared.getRooms();
    }
    
    
    private func showList(){
        let listLayout = listLayout()
        collectionView.collectionViewLayout = listLayout
        
        let cellRegistration = UICollectionView.CellRegistration { (cell: UICollectionViewListCell,       indexPath: IndexPath, itemIdentifier: String) in
            let roomId = DataManager.shared.getRooms()[indexPath.item]
            var contentConfiguration = cell.defaultContentConfiguration()
            contentConfiguration.text = roomId
            cell.contentConfiguration = contentConfiguration
        }
        
        dataSource = DataSource(collectionView: collectionView) { (collectionView: UICollectionView, indexPath: IndexPath, itemIdentifier: String) in
            return collectionView.dequeueConfiguredReusableCell(using: cellRegistration, for: indexPath, item: itemIdentifier)
        }
        
        var snapshot = Snapshot()
        snapshot.appendSections([0])
        snapshot.appendItems(DataManager.shared.getRooms())
        dataSource.apply(snapshot)
        collectionView.dataSource = dataSource
    }
    
    private func listLayout() -> UICollectionViewCompositionalLayout {
           var listConfiguration = UICollectionLayoutListConfiguration(appearance: .grouped)
           listConfiguration.showsSeparators = false
           listConfiguration.backgroundColor = .clear
           return UICollectionViewCompositionalLayout.list(using: listConfiguration)
       }
    
//    override func numberOfSections(in tableView: UITableView) -> Int {
//        return 1
//    }
//    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
//        return DataManager.shared.getRooms().count
//    }
//
//    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
//        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
//        cell.textLabel?.text = DataManager.shared.getRooms()[indexPath.row]
//        return cell
//    }
//
//    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
//        print(DataManager.shared.getRooms()[indexPath.row])
//    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
