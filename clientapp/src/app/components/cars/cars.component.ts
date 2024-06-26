import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { BrandService } from '../../services/brand/brand.service';
import { CategoryService } from '../../services/category/category.service';
import { FormControl } from '@angular/forms';
import { CarService } from '../../services/car/car.service';
import { CarQueryModel, FilteredAndPagedCarDTO } from '../../models/car.model';
import { MatSliderDragEvent } from '@angular/material/slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  // brands
  brands: string[] = [];
  @ViewChild('brandInput') brandInput: ElementRef<HTMLInputElement> = {} as ElementRef;
  brand = new FormControl('');
  filteredBrands: string[] = [];

  // categories
  categories: string[] = [];
  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement> = {} as ElementRef;
  category = new FormControl('');
  filteredCategories: string[] = [];

  queryModel: CarQueryModel = { currentPage: 1 } as CarQueryModel;
  filteredAndPagedCarDTO: FilteredAndPagedCarDTO = {} as FilteredAndPagedCarDTO;

  canGoToPreviousPage: boolean = true;
  canGoToNextPage: boolean = true;

  constructor(private brandService: BrandService, private categoryService: CategoryService, private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(data => {
      this.brands = data;
      this.filteredBrands = this.brands.slice();
    });

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.filteredCategories = this.categories.slice();
    });

    // initial car load
    this.refreshCars();

    this.brand.valueChanges.subscribe(value => {
      value = value ?? '';
      this.queryModel.brand = value;
      this.refreshCars();
    });

    this.category.valueChanges.subscribe(value => {
      value = value ?? '';
      this.queryModel.category = value;
      this.refreshCars();
    });
  }

  filterBrands() {
    const filterValue = this.brandInput.nativeElement.value.toLowerCase();
    this.filteredBrands = this.brands.filter(b => b.toLowerCase().startsWith(filterValue));
  }

  filterCategories() {
    const filterValue = this.categoryInput.nativeElement.value.toLowerCase();
    this.filteredCategories = this.categories.filter(c => c.toLowerCase().startsWith(filterValue));
  }

  updateMinPrice(event: MatSliderDragEvent) {
    this.queryModel.minPrice = event.value;
    this.refreshCars();
  }

  updateMaxPrice(event: MatSliderDragEvent) {
    this.queryModel.maxPrice = event.value;
    this.refreshCars();
  }

  redirectToCarDetails(id: number) {
    this.router.navigate([`/car/${id}`]);
  }

  goToPreviousPage() {
    this.queryModel.currentPage--;
    this.refreshCars();
  }

  goToNextPage() {
    this.queryModel.currentPage++;
    this.refreshCars();
  }

  refreshCars() {
    this.carService.getCars(this.queryModel).subscribe(data => {
      this.filteredAndPagedCarDTO = data;
      this.canGoToPreviousPage = this.queryModel.currentPage > 1;
      this.canGoToNextPage = this.queryModel.currentPage * 3 < this.filteredAndPagedCarDTO.totalCount;
    });
  }
}
