import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VocaService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllWords() {
    return this.prisma.voca.findMany();
  }

  async createWord(word: string, meaning: string) {
    return this.prisma.voca.create({
      data: { word, meaning },
    });
  }
}
