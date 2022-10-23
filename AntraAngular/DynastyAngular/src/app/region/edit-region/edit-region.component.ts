import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {

  isUpdating = false;
  editRegionForm:FormGroup;
  region:Region={
    id:0,
    name:''
  }
  isSuccessful:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, private builder:FormBuilder, private regionService:RegionService) 
  {
    activatedRoute.params.subscribe(d=>{
      this.region.id=d["id"]      
    })
    this.editRegionForm = builder.group({
      "regionName":new FormControl('',[])
    });
   }

  ngOnInit(): void {
  }

  updateRegion(){   
    this.isUpdating = true;
    this.region.name= this.editRegionForm.value["regionName"];
    this.regionService.updateRegion(this.region).subscribe((data:any)=>{
      this.isSuccessful=true;
    });
  }

}