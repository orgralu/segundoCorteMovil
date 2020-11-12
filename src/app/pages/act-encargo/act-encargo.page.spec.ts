import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActEncargoPage } from './act-encargo.page';

describe('ActEncargoPage', () => {
  let component: ActEncargoPage;
  let fixture: ComponentFixture<ActEncargoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActEncargoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActEncargoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
