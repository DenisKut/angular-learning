import { AsyncPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { map, Observable } from 'rxjs';

import { API_PRODUCTS, Product } from './consts';

@Component({
	selector: 'app-advanced',
	imports: [AsyncPipe, DecimalPipe, PercentPipe],
	templateUrl: './advanced.component.html',
	styleUrl: './advanced.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedComponent implements OnInit {
	protected products: Observable<Product[]> | null = null;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.products = this.getProducts();
	}

	protected getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(API_PRODUCTS).pipe(
			map(products => {
				return products.map((product, index) => {
					return {
						...product,
						sales: index * 3
					};
				});
			})
		);
	}
}
