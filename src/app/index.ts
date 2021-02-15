import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './utils/material.module';

export const modules = [MaterialModule, AuthModule, SharedModule];

export * from './shared/shared.module';
export * from './utils/material.module';
export * from './auth/auth.module';
