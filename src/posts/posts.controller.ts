import { Controller } from '@nestjs/common';
import { PostService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostService) {}
}
