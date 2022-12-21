import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Param, Query } from '@nestjs/common/decorators';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  //Get Request
  @Get()
  getUser() {
    return { username: 'Muddasir', email: 'chmudasirbwn775@gmail.com' };
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
  getUserBySingleId(@Param('id') id: string) {
    console.log(id);
    return { id: id };
  }

  //Query Parameter
  @Get('byQueryParameter')
  getUserByQueryParameter(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [{ name: 'Muddasir' }];
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
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
}
