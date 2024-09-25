import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserserviceService } from '../userservice.service';

export interface TravelData {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phoneNumber: string;
  departureCountry: string;
  destinationCountry: string;
  departureDateTime: { date: string, time: string };
  returnDateTime: { date: string, time: string };
  classOfService: string;
  organizationName: string;
  preferredAirline: string;
  preferredHotel: string;
  birthDate: string;
  additionalInfo: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'title', 'firstName', 'lastName', 'email', 'phoneNumber', 
    'departureCountry', 'destinationCountry', 'departureDate', 'returnDate', 
    'classOfService', 'organizationName', 'preferredAirline', 'preferredHotel', 
    'birthDate', 'additionalInfo',
  ];

  dataSource = new MatTableDataSource<TravelData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private travelService: UserserviceService) {}

  ngOnInit(): void {
    this.getTravelList();
  }
  getTravelList(): void {
    this.travelService.listTravelInfo().subscribe(
      (response) => {
        const travelData: TravelData[] = response.data; // Ensure you access the correct property
        console.log('Fetched travel data:', travelData); // Log data to confirm
        this.dataSource.data = travelData;

        // Set up paginator and sort after the data is loaded
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching travel data:', error);
      }
    );
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(element: TravelData): void {
    console.log('Editing element: ', element);
  }

  delete(element: TravelData): void {
    console.log('Deleting element: ', element);
  }
}
