# PruebaAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## API: FakeStore

These are the endpoints used:

- https://fakestoreapi.com/products
- https://fakestoreapi.com/products/1
- https://fakestoreapi.com/products?sort=asc
- https://fakestoreapi.com/products?sort=desc
- https://fakestoreapi.com/products/categories
- https://fakestoreapi.com/products/category/jewelery


# Achives

A continuación los requisitos del proyecto (objetivos):
- Crear un proyecto front en angular con al menos (3 paginas y Componentes) el proyecto debe tener las siguientes características:
    * a. implementar capa MVC
    * b. usar enrutamiento
    * c. usar al menos una Interfaz e implementar capa (modelo)
    * d. implementar un servicio y el llamado a una API
    * e. crear al menos un Callback
    * f. opcional: Implementar una encriptación (simétrica o asimétrica)
    * g. usar algún operador con rxis/operators
    * h. implementar al menos un array y un Objeto
    * i. implementar al menos una directiva (evento y estructural)
    * j. usar localStorage
    * k. al menos implementar una prueba unitaria
    * i. implementar ENV
    * m. usar al menos un (promise y un observable)
    * n. usar CSS y estilos (responsive design)
    * o. usar al menos un efecto CSS y una KeyFrame
    
Se deberá considerar lo siguiente, el proyecto puede correr en local pero si se despliega en algún servicio en la nube será considerado un plus al proyecto. También debe considerarse que se cuestionara de manera técnica las características que se solicitaron.

# Docker

Para crear el dist, la imagen y el contenedor:

* Generar el build (./dist) del proyecto de angular:
    ` ng build --configuration production ` o ` ng build --configuration development `

* Generar la imagen de docker:
    ` docker build -t prueba-angular:lastest . `

* Generar y correr el contenedor:
    ` docker run -d -p 80:80 prueba-angular `

