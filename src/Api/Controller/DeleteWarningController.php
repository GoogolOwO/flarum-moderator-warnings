<?php

/*
 * This file is part of GoogolOwO/flarum-warnings
 *
 *  Copyright (c) 2021 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace GoogolOwO\FlarumWarnings\Api\Controller;

use GoogolOwO\FlarumWarnings\Api\Serializer\WarningSerializer;
use GoogolOwO\FlarumWarnings\Model\Warning;
use GoogolOwO\FlarumWarnings\Notification\WarningBlueprint;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Flarum\Notification\NotificationSyncer;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class DeleteWarningController extends AbstractCreateController
{
    public $serializer = WarningSerializer::class;

    /**
     * @var NotificationSyncer
     */
    protected $notifications;

    /**
     * @param NotificationSyncer $notifications
     */
    public function __construct(NotificationSyncer $notifications)
    {
        $this->notifications = $notifications;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);
        $actor->assertCan('user.deleteWarnings');

        $warning = Warning::find(Arr::get($request->getQueryParams(), 'warning_id'));

        $warning->delete();

        $this->notifications->sync(new WarningBlueprint($warning), []);

        return $warning;
    }
}
