import { RequestHandler } from 'express';
import prisma from '@/prisma';

export class SampleController {
  public getSampleData: RequestHandler = async (req, res, next) => {
    try {
      const sampleData = await prisma.sample.findMany();
      res.status(200).send(sampleData);
    } catch (error) {
      next(error);
    }
  };

  public getSampleDataById: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const sample = await prisma.sample.findUnique({
        where: { id: Number(id) },
      });

      if (!sample) {
        res.sendStatus(404);
      } else {
        res.status(200).send(sample);
      }
    } catch (error) {
      next(error);
    }
  };

  public createSampleData: RequestHandler = async (req, res, next) => {
    try {
      const { name, code } = req.body;

      const newSampleData = await prisma.sample.create({
        data: { name, code },
      });

      res.status(201).send(newSampleData);
    } catch (error) {
      next(error);
    }
  };
}
