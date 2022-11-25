//
//  ViewController.swift
//  roomscan
//
//  Created by Flux on 18/11/2022.
//

import UIKit
import RoomPlan

class ScanController: UIViewController, RoomCaptureViewDelegate, RoomCaptureSessionDelegate {
    private var scanning: Bool = false
    private var roomCaptureView: RoomCaptureView!
    private var roomCaptureSessionConfig: RoomCaptureSession.Configuration = RoomCaptureSession.Configuration()

    @IBOutlet weak var roomView: RoomCaptureView!
    
    @IBOutlet weak var done: UIImageView!
    @IBOutlet weak var cancel: UIImageView!
    
    @IBOutlet weak var message: UILabel!
    @IBOutlet weak var exportButton: UIButton!
    @IBOutlet weak var retakeButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        hideExportButtons()
        setup()
    }
    
    private func setup() {
        roomView.captureSession.delegate = self
        roomView.delegate = self
        
        let tapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(doneClickked(tapGestureRecognizer:)))
        done.isUserInteractionEnabled = true
        done.addGestureRecognizer(tapGestureRecognizer)
        
        let tapGestureRecognizer2 = UITapGestureRecognizer(target: self, action: #selector(cancelClicked(tapGestureRecognizer:)))
        cancel.isUserInteractionEnabled = true
        cancel.addGestureRecognizer(tapGestureRecognizer2)
    }
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        startSession()
    }
    
    override func viewWillDisappear(_ flag: Bool) {
        super.viewWillDisappear(flag)
        stopSession()
    }
    
    private func startSession() {
        scanning = true
        roomView?.captureSession.run(configuration: roomCaptureSessionConfig)
    }
    
    private func stopSession() {
        scanning = false
        roomView?.captureSession.stop()
    }
    
    func captureView(didPresent processedResult: CapturedRoom, error: Error?) {
        print("helllooooooo")
        print(processedResult)
    }
    
    @objc func doneClickked(tapGestureRecognizer: UITapGestureRecognizer)
    {
        stopSession()
        hideButtons()
        showExportButtons()
        print("hello")
    }
    
    @objc func cancelClicked(tapGestureRecognizer: UITapGestureRecognizer)
    {
        stopSession()
        print("bye")
        let vc = storyboard?.instantiateViewController(identifier: "tabBar") as! TabBarViewController
        vc.modalPresentationStyle = .fullScreen
        present(vc, animated: true)
    }
    
    private func hideExportButtons(){
        exportButton.isHidden = true
        retakeButton.isHidden = true
        message.isHidden = true
    }
    
    private func showExportButtons(){
        exportButton.isHidden = false
        retakeButton.isHidden = false
        message.isHidden = false
    }
    
    private func hideButtons(){
        done.isHidden = true
        cancel.isHidden = true
    }
    
    private func showButtons(){
        done.isHidden = false
        cancel.isHidden = false
    }
    
    
    @IBAction func exportData(_ sender: Any) {
    }
    
    @IBAction func retake(_ sender: Any) {
        startSession()
        showButtons()
        hideExportButtons()
    }
}

