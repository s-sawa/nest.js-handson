import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  findAllItem() {
    return 'This is ItemsService.';
  }
}
