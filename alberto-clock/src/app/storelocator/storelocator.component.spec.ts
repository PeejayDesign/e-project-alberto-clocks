import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorelocatorComponent } from './storelocator.component';

describe('StorelocatorComponent', () => {
  let component: StorelocatorComponent;
  let fixture: ComponentFixture<StorelocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorelocatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorelocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
