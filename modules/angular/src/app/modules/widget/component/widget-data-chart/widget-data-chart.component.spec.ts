import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDataChartComponent } from './widget-data-chart.component';

describe('WidgetDataChartComponent', () => {
  let component: WidgetDataChartComponent;
  let fixture: ComponentFixture<WidgetDataChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetDataChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
