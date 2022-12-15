//
//  BorderedTextField.swift
//  roomscan
//
//  Created by Flux on 25/11/2022.
//

import Foundation
import UIKit

class BorderedTextField : UITextField {
    required init?(coder aDecoder: NSCoder) {
        super.init(coder:aDecoder)
        self.layer.cornerRadius = 5.0
        self.layer.borderWidth = 0.5
        self.layer.borderColor = UIColor(red: 125/255.0, green: 125.0/255.0, blue: 125.0/255.0, alpha: 0.5).cgColor
        self.layer.masksToBounds = true
    }
}
