import { createUnionType } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { ExecutionContext } from 'src/execution-context';
import { UserEntity } from './user.entity';
import { ViewerEntity } from './viewer.entity';

/**
 * resolve `UserUnion` real type
 * @param value User object.
 * @param context Application context.
 */
async function resolveType(value: User, context: ExecutionContext) {
  if (context.user && context.user.id == value.id) {
    return ViewerEntity;
  }

  return UserEntity;
}

/**
 * User union type.
 */
export const UserUnion = createUnionType({
  name: 'userUnion',
  types: () => [UserEntity, ViewerEntity],
  resolveType,
  description: 'User union type.',
});
