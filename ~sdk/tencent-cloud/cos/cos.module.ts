import { Module } from '@nestjs/common';
import { ConfigModule } from '~config';
import { TencentCloudStsModule } from '../sts';
import { tencentCloudCosConfig } from './cos.config';
import { TencentCloudCosService } from './cos.service';

/**
 * Tencent Cloud COS module.
 */
@Module({
  imports: [
    TencentCloudStsModule,
    ConfigModule.forFeature(tencentCloudCosConfig),
  ],
  providers: [TencentCloudCosService],
  exports: [TencentCloudCosService],
})
export class TencentCloudCosModule {}