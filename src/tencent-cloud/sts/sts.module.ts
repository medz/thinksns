import { Module } from '@nestjs/common';
import { TencentCloudStsService } from './sts.service';

/**
 * Tencent Cloud STS module.
 */
@Module({
  providers: [TencentCloudStsService],
  exports: [TencentCloudStsService],
})
export class TencentCloudStsModule {}