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

    override func viewDidLoad() {
        super.viewDidLoad()
        setup()

    }
    
    private func setup() {
        roomCaptureView = RoomCaptureView(frame: view.bounds)
        roomCaptureView.captureSession.delegate = self
        roomCaptureView.delegate = self
        view.insertSubview(roomCaptureView, at: 0)
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
        roomCaptureView?.captureSession.run(configuration: roomCaptureSessionConfig)
    }
    
    private func stopSession() {
        scanning = false
        roomCaptureView?.captureSession.stop()
    }
}

