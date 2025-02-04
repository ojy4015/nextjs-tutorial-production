import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
};

export const POST = async (request) => {
  console.log('request : ', request);
  const data = await request.json();
  console.log('data : ', data);
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ data: task });
};
