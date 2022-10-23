import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.scss']
})
export class ListRegionComponent implements OnInit {

  regionCollection: Region[] = []
  constructor(private regionService: RegionService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.regionService.getAllRegion().subscribe((data) => {
      this.regionCollection = data;
    });
  }

  editRegion(id: any) {
    this.router.navigate(['region/edit/' + id]);
  }

  deleteRegion(id: any) {
    this.regionService.deleteRegion(id).subscribe((d: any) => {
      this.getData();
    });
  }

  addRegion(){
    this.router.navigate(['/region/add']);
  }
}
