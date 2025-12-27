-- CreateIndex
CREATE INDEX `account_userId_idx` ON `account`(`userId`(191));

-- CreateIndex
CREATE INDEX `invitation_organizationId_idx` ON `invitation`(`organizationId`(191));

-- CreateIndex
CREATE INDEX `member_organizationId_idx` ON `member`(`organizationId`(191));

-- CreateIndex
CREATE INDEX `member_userId_idx` ON `member`(`userId`(191));

-- CreateIndex
CREATE INDEX `session_userId_idx` ON `session`(`userId`(191));
