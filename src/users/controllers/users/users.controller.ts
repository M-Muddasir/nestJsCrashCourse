import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Param, Query, UsePipes } from '@nestjs/common/decorators';
import {
  ParseBoolPipe,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  //Get Request
  @Get()
  getUser() {
    console.log("Hello");
    return this.userService.fetchUsers();
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'Muddasir',
        email: 'chmudasirbwn775@gmail.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
          { id: 3, title: 'Post 3' },
        ],
      },
      {
        username: 'Muddasir',
        email: 'chmudasirbwn775@gmail.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
          { id: 3, title: 'Post 3' },
        ],
      },
      {
        username: 'Muddasir',
        email: 'chmudasirbwn775@gmail.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
          { id: 3, title: 'Post 3' },
        ],
      },
      {
        username: 'Muddasir',
        email: 'chmudasirbwn775@gmail.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
          { id: 3, title: 'Post 3' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUserPostsComments() {
    return [{ id: 1, title: 'Post 1', comments: 'Hello' }];
  }

  //With Single Parameter
  //Simple Parameter i.e users/23
  @Get('getUserBySingleId/:id')
  //   getUserById(@Req() request: Request, @Res() response: Response) {
  getUserBySingleId(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return { id: id };
  }

  //Query Parameter
  @Get('byQueryParameter')
  getUserByQueryParameter(@Query('sortAsc', ParseBoolPipe) sortAsc: boolean) {
    console.log(sortAsc);
    return [{ name: 'Muddasir', pa: sortAsc }];
  }

  //With Single Parameter
  @Get(':id/:postId')
  getUserByMultipleId(
    @Param('id') id: string,
    @Param('postId') postId: string,
  ) {
    console.log(id);
    return { id, postId };
  }

  //Post Request
  @Post('create')
  //   createUser(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.body);
  //     response.send('Created here');
  //   }
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
