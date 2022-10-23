import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  addRegionForm: FormGroup;
  region: Region = {
    id: 0,
    name: ''
  }
  isSuccessful: boolean = false;

  constructor(private builder: FormBuilder, private regionService: RegionService) {

    this.addRegionForm = builder.group({
      "regionName": new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  saveRegion() {
    this.region.name = this.addRegionForm.value['regionName'];
    this.regionService.addRegion(this.region).subscribe((data: any) => {
      this.isSuccessful = true;
    });
  }

}
