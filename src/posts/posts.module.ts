import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  exports: [PostService],
  imports: [PrismaModule],
})
export class PostsModule {}
