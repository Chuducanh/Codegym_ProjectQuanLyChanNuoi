import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimalService} from '../../service/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  indexPagination = 0;
  animal: any;
  id: number;
  deletes: number[] = [];
  formCreate: FormGroup;
  formEdit: FormGroup;

  constructor(private animalService: AnimalService, private toastr: ToastrService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(111);
    this.getAll(this.indexPagination);

    this.formCreate = this.fb.group({
        id: [],
        cageId: ['', [Validators.required]],
        isSick: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        dateIn: ['', [Validators.required]],
        dateOut: ['', [Validators.required]],
      },
      {
        validators: [this.dateValidator('dateIn', 'dateOut'),
          this.dateValidator('dateIn', 'dateOut')]
      });

    this.formEdit = this.fb.group({
        id: [],
        cageId: ['', [Validators.required]],
        isSick: ['', [Validators.required]],
        weight: ['', [Validators.required]],
        dateIn: ['', [Validators.required]],
        dateOut: ['', [Validators.required]]
      },
      {
        validators: [this.dateValidator('dateIn', 'dateOut'),
          this.dateValidator('dateIn', 'dateOut')]
      });
    // ban đầu load vô id: underfine => lỗi
    // this.editModal(this.id);
  }

  dateValidator(dateIn: string, dateOut: string) {
    return (formGroup: FormGroup) => {
      const control1 = formGroup.controls[dateIn];
      const control2 = formGroup.controls[dateOut];

      if (control1.errors && !control2.errors.confirmedValidator) {
        return;
      }

      if (control1.value > control2.value) {
        control2.setErrors({dateValidator: true});
      } else {
        control2.setErrors(null);
      }
    };
  }

  editModal(id: number) {
    this.id = id;
    // this.formEdit = this.fb.group({
    //     id: [],
    //     cageId: ['', [Validators.required]],
    //     isSick: ['', [Validators.required]],
    //     weight: ['', [Validators.required]],
    //     dateIn: ['', [Validators.required]],
    //     dateOut: ['', [Validators.required]]
    //   },
    //   {
    //     validators: [this.dateValidator('dateIn', 'dateOut'),
    //       this.dateValidator('dateIn', 'dateOut')]
    //   });
    // Copy form eidt lên bỏ ở onInit luôn
    this.animalService.findById(this.id).subscribe(animalEdit => {
      this.formEdit.patchValue(animalEdit);
      // console.log(this.formEdit);
    });
    this.formEdit.reset();
  }

  deleteMultiple() {
    for (const i of this.deletes) {
      this.delete(i);
    }
    this.deletes = [];
  }

  multiDelete(id) {
    // tslint:disable-next-line:triple-equals
    if (this.deletes.find(x => x == id )) {
      this.deletes.splice(this.deletes.indexOf(id), 1);
    } else {
      this.deletes.push(id);
    }
    // console.log(this.deletes);
  }

  onSubmit() {
    const animal = this.formCreate.value;
    // console.log(animal);
    this.animalService.create(animal).subscribe(() => {
      this.getAll(0);
      this.toastr.success('Thêm mới thành công', 'Thông báo');
    }, error => {
      this.toastr.error('Thêm mới thất bại', 'Thông báo');
    });
    this.formCreate.reset();
  }

  onSubmitEdit(id: number) {
    const animal = this.formEdit.value;
    this.animalService.update(id, animal).subscribe(() => {
      this.getAll(0);
      this.toastr.success('Chỉnh sửa thành công', 'Thông báo');
    }, error => {
      this.toastr.error('Chỉnh sửa thất bại', 'Thông báo');
    });
  }

  getAll(indexPagination) {
    this.animalService.getAll(indexPagination).subscribe(
      data => {
        this.animal = data;
      });
  }

  changeId(id: number) {
    this.id = id;
  }

  delete(id: number) {
    this.animalService.delete(id).subscribe(() => {
      this.getAll(0);
      this.toastr.success('Đã xóa thành công', 'Thông báo');
    }, error => {
      this.toastr.error('Xóa thất bại', 'Thông báo');
    });
  }


  firstPage() {
    this.indexPagination = 0;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination >= this.animal.totalPages) {
      this.indexPagination = this.indexPagination - 1;
      this.ngOnInit();
    }
    this.animalService.getAll(this.indexPagination).subscribe(data => {
      this.animal = data;
    });
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    // tslint:disable-next-line:triple-equals
    if (this.indexPagination == -1) {
      this.indexPagination = 0;
      this.ngOnInit();
    } else {
      this.animalService.getAll(this.indexPagination).subscribe(data => {
        this.animal = data;
      });
    }
  }

  previousTwoPage() {
    this.indexPagination = this.indexPagination - 2;
    if (this.indexPagination < 0) {
      this.indexPagination = 0;
      this.ngOnInit();
    } else {
      this.animalService.getAll(this.indexPagination).subscribe(data => {
        this.animal = data;
      });
    }
  }

  nextTwoPage() {
    this.indexPagination = this.indexPagination + 2;
    if (this.indexPagination >= this.animal.totalPages) {
      this.indexPagination = this.indexPagination - 2;
      this.ngOnInit();
    }
    this.animalService.getAll(this.indexPagination).subscribe(data => {
      this.animal = data;
    });
  }


  lastPage() {
    this.indexPagination = this.animal.totalPages - 1;
    this.animalService.getAll(this.indexPagination).subscribe(data => {
      this.animal = data;
    });
  }

}

