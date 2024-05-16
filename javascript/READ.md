# Traffic Event App Server

This project implements a traffic event application server using an event-driven architecture. It consists of three main components: hub, driver, and client.

## Hub
The hub serves as the central moderator for all traffic events. It manages the communication between drivers and clients, facilitating the exchange of traffic-related information.

### Installation and Setup
1. Navigate to the `hub` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the hub server.

## Driver
The driver component represents vehicles on the road that can report traffic events such as accidents, road closures, or heavy traffic to the hub.

### Installation and Setup
1. Navigate to the `driver` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the driver server.

## Client
The client component allows users to view real-time traffic updates and receive notifications about events reported by drivers.

### Installation and Setup
1. Navigate to the `client` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the client application.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Create a new pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
