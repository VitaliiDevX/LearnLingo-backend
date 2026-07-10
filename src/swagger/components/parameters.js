export const parameters = {
  PageParam: {
    name: 'page',
    in: 'query',
    description: 'The page number to retrieve for pagination',
    schema: {
      type: 'integer',
      minimum: 1,
      default: 1,
    },
  },
  PerPageParam: {
    name: 'perPage',
    in: 'query',
    description: 'The number of items to return per page',
    schema: {
      type: 'integer',
      minimum: 1,
      maximum: 50,
      default: 4,
    },
  },
  TeacherIdParam: {
    name: 'teacherId',
    in: 'path',
    required: true,
    description: 'The unique identifier of the teacher',
    schema: {
      type: 'string',
      example: '60d5ec49f1b2c80015f8c123',
    },
  },
  TeacherLanguageQuery: {
    name: 'languages',
    in: 'query',
    description: 'Filter teachers by the language they teach',
    schema: {
      type: 'string',
      example: 'English',
    },
  },
  TeacherPriceQuery: {
    name: 'price_per_hour',
    in: 'query',
    description: 'Filter teachers by their maximum hourly rate',
    schema: {
      type: 'number',
      minimum: 0,
      example: 25,
    },
  },
  TeacherLevelQuery: {
    name: 'level',
    in: 'query',
    description: 'Filter teachers by language level',
    schema: {
      type: 'string',
      enum: [
        'A1 Beginner',
        'A2 Elementary',
        'B1 Intermediate',
        'B2 Upper-Intermediate',
        'C1 Advanced',
        'C2 Proficiency',
      ],
    },
  },
};
