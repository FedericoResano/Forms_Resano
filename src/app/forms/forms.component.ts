import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @Input() listaMonedas !: string[];
  title= "Carga de Cotizaciones";
  constructor(private fb: FormBuilder) {};
    formularioCotizacionMoneda = this.fb.group({
      moneda:['', [Validators.required]],
      fecha:['', [Validators.required]],
      valorVendedor:['',[Validators.required, Validators.max(999)]],
      valorComprador:['',[Validators.required, Validators.max(999)]],
    });

    ngOnInit() {
    }

    submit(){
      console.log(this.formularioCotizacionMoneda.value);
    }
    
}
