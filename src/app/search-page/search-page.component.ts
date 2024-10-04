import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RedalService } from '../service/redal.service';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchTerm: string = '';
  errorMessage: string = '';
  myControl = new FormControl();
  isCityValid: boolean = true;


  options: string[] = ['Rabat', 'Temara', 'Sale'];
  filteredOptions!: Observable<string[]>;
  constructor(private fb:FormBuilder,private router: Router,private redalservice:RedalService) {}
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      // startWith(''), pour effichei tout au debut
      map(value => this._filter(value))
    );


  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onSearch() {

  if (this.myControl.valid && (this.myControl.value=="Rabat")) {
    this.isCityValid = true;

    this.router.navigate(['/carte']);

  } else if (this.myControl.valid && (this.myControl.value=="Sale")) {
    this.isCityValid = true;

    this.router.navigate(['/sale']);

  }
  else if (this.myControl.valid && (this.myControl.value=="Temara")) {
    this.isCityValid = true;

    this.router.navigate(['/temara']);

  }
  else {
      this.isCityValid = false;







  }






}}
