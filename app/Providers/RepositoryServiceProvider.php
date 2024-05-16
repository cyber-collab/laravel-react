<?php

namespace App\Providers;

use App\Interfaces\CompanyRepositoryInterface;
use App\Interfaces\MessageRepositoryInterface;
use App\Repositories\CompanyRepository;
use App\Repositories\MessageRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(CompanyRepositoryInterface::class, CompanyRepository::class);
        $this->app->bind(MessageRepositoryInterface::class, MessageRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
