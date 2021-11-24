
## Open Herb Frontend

This application is currently serving the main purpose to display and read information that is coming
from the MQTT AWS service https://mqtt.org/

This service is transporting important information from sensors ( temperature, Luminosity )


## MQTT Broker Test Setup

Start the development stack in the root of the repository:
```bash
docker compose up
```

RabbitMQ MQTT Broker will listen on `localhost:1883`. You can visit the RabbitMQ management dashboard on `localhost:15672` and login with admin credentials:\
Username: `admin` \
Password: `admin`

The broker is password protected so you will need to authenticate when you configure the client with the following username and password:\
Username: `/:microservice` \
Password: `microservice`

The telemetry topic you need to subscribe to is called `topic/telemetry`

Teardown the containers
```bash
docker compose down
```

Remove the images and teardown:
```bash
docker compose down --rmi "all"
```



# OpenHerbDashboard

![img](/docs/img/icon.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
ls
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## License
[GNU General Public License v3.0](/LICENSE)