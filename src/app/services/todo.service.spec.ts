import { TestBed, fakeAsync } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('TodoService', () => {
  let service: TodoService;
  let originalTimeout:any;
  let GET = [
    {
      "id": 1,
      "task": "Do angular project"
    }
  ]

  let httpClieSpy = jasmine.createSpyObj('HttpClient',['get']);
 beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers : [TodoService],
    });
    service = TestBed.inject(TodoService);
 })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("test getData()", fakeAsync((done:DoneFn)=>{
    httpClieSpy.get.and.returnValue(of(GET));
    service.getTask().subscribe({
    next : (data:any)=>{
    expect(data).toBe(GET)
    done();
    },
    error: ()=>{
    done.fail;
    }
    })
    }));
});

