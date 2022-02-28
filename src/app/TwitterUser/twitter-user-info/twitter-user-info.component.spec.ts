import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterUserInfoComponent } from './twitter-user-info.component';

describe('TwitterUserInfoComponent', () => {
  let component: TwitterUserInfoComponent;
  let fixture: ComponentFixture<TwitterUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
