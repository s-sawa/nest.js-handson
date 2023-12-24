import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items') // デコレータの引数に"items"と書くことでitemsパスとcontrollerが紐づく
export class ItemsController {
  // 以下のように記述することでItemsServiceがインスタンス化されてitemsServiceという変数に代入までしてくれる
  // つまりDIを実行
  constructor(private readonly itemsService: ItemsService) {}
  // findAllはgetメソッドで使いたいのでHTTPメソッドのGETデコレーターをつける
  @Get()
  findAll() {
    // return 'This is findAll method';
    // ItemServiceクラスのfindAllメソッドの戻り値に変更
    return this.itemsService.findAllItem();
  }

  @Get(':itemId')
  findOne(@Param('itemId') itemId: string) {
    return `This itemId is ${itemId}`;
  }
}
