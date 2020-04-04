////PUNTO 1: CLASE ESTUDIANTE
import { Course } from './course.js';
import {dataCourses} from './dataCourses.js';
class student{
    //export interface course.ts{
        //isAcceptable(s: string): boolean;
      //}
    // variables
    private id:number;
    private activo:boolean;
    private name:string;

 
    // constructors
    constructor(dataCourse:Course[],pName:string,pId:number,pActivo:boolean){ 
         this.name = pName; 
         this.id = pId; 
         this.activo = pActivo; 


    }

    //functions

    isActive():boolean{
        return this.activo; 
    }

    estadoUni():string{
        return this.isActive?'Activo':'No activo'
    }

    activar():void{
        this.activo = true; 
    }

    desplegarMaterias():void{
        for( let materia of dataCourses){
            console.log(materia);
        }
    }


    despliege(nombre:string,estado:boolean, id:number):string{
        if(estado==true){
            return 'El estudiante con id' + id.toString + 'Se llama:' + nombre + 'y ve las siguientes materias:' + this.desplegarMaterias ; 
        }

        else{
            return 'El estudiante no esta activo';
        }
    }

    desplegar():void {
        console.log(this.despliege )
    }
}
    let e0: student = new student(dataCourses,'Daniel Londono',201821363,true);
    e0.activar;
    e0.despliege;

 
   
