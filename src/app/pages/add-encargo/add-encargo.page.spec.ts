import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEncargoPage } from './add-encargo.page';

describe('AddEncargoPage', () => {
  let component: AddEncargoPage;
  let fixture: ComponentFixture<AddEncargoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEncargoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEncargoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
