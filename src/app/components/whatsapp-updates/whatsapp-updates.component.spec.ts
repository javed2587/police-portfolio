import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappUpdatesComponent } from './whatsapp-updates.component';

describe('WhatsappUpdatesComponent', () => {
  let component: WhatsappUpdatesComponent;
  let fixture: ComponentFixture<WhatsappUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappUpdatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatsappUpdatesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
